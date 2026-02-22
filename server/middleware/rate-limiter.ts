import { RequestHandler } from "express";

const WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const MAX_REQUESTS = 100; // limit each IP to 100 requests per windowMs

interface RateLimitRecord {
  count: number;
  resetTime: number;
}

export const _hits = new Map<string, RateLimitRecord>();

/**
 * Simple in-memory rate limiting middleware.
 * Tracks requests by IP address.
 */
export const rateLimiter: RequestHandler = (req, res, next) => {
  const ip = req.ip || req.socket.remoteAddress || "unknown";
  const now = Date.now();

  let record = _hits.get(ip);

  // If no record exists or the window has expired, reset the record
  if (!record || now > record.resetTime) {
    record = { count: 1, resetTime: now + WINDOW_MS };
    _hits.set(ip, record);
    return next();
  }

  // Increment the request count
  record.count++;

  // Check if the limit has been exceeded
  if (record.count > MAX_REQUESTS) {
    res.setHeader("Retry-After", Math.ceil((record.resetTime - now) / 1000));
    res.status(429).json({
      error: "Too many requests, please try again later.",
    });
    return;
  }

  next();
};

// Cleanup stale records periodically to prevent memory leaks
setInterval(() => {
  const now = Date.now();
  for (const [ip, record] of _hits.entries()) {
    if (now > record.resetTime) {
      _hits.delete(ip);
    }
  }
}, WINDOW_MS);

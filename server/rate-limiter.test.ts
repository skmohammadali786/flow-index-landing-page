import { describe, it, expect, vi, beforeEach } from "vitest";
import { rateLimiter, _hits } from "./middleware/rate-limiter";
import { Request, Response } from "express";

describe("Rate Limiter Middleware", () => {
  let req: Partial<Request>;
  let res: Partial<Response>;
  let next: any;

  beforeEach(() => {
    _hits.clear();
    req = {
      ip: "127.0.0.1",
      socket: {} as any,
    };
    res = {
      status: vi.fn().mockReturnThis(),
      json: vi.fn().mockReturnThis(),
      setHeader: vi.fn().mockReturnThis(),
    };
    next = vi.fn();
  });

  it("should allow requests under the limit", () => {
    rateLimiter(req as Request, res as Response, next);
    expect(next).toHaveBeenCalled();
  });

  it("should block requests over the limit", () => {
    const ip = "192.168.1.1";
    req.ip = ip;

    // Simulate 100 requests (the limit)
    for (let i = 0; i < 100; i++) {
      rateLimiter(req as Request, res as Response, next);
    }
    expect(next).toHaveBeenCalledTimes(100);

    // The 101st request should be blocked
    rateLimiter(req as Request, res as Response, next);
    expect(res.status).toHaveBeenCalledWith(429);
    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({
        error: "Too many requests, please try again later.",
      }),
    );
    expect(next).toHaveBeenCalledTimes(100); // Should not have been called again
  });

  it("should reset the limit after the window expires", () => {
    const ip = "10.0.0.1";
    req.ip = ip;

    // Set a record that is already expired
    _hits.set(ip, { count: 100, resetTime: Date.now() - 1000 });

    rateLimiter(req as Request, res as Response, next);
    expect(next).toHaveBeenCalled();
    expect(_hits.get(ip)?.count).toBe(1);
  });
});

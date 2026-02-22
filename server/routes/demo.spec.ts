import { describe, it, expect, vi } from "vitest";
import { Request, Response } from "express";
import { handleDemo } from "./demo";

describe("handleDemo", () => {
  it("should return 200 and a message", () => {
    // Mock Request and Response
    const req = {} as Request;
    const res = {
      status: vi.fn().mockReturnThis(),
      json: vi.fn().mockReturnThis(),
    } as unknown as Response;

    // Call the handler
    handleDemo(req, res, () => {});

    // Assertions
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      message: "Hello from Express server",
    });
  });
});

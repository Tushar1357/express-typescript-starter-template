import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ApiResponse } from '../utils/apiResponse';
import { asyncErrorHandler } from '../utils/asyncErrorHandler';

export const getHealth = asyncErrorHandler(async (req: Request, res: Response) => {
  const healthData = {
    status: 'healthy',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    memory: {
      used: Math.round(process.memoryUsage().heapUsed / 1024 / 1024),
      total: Math.round(process.memoryUsage().heapTotal / 1024 / 1024),
    },
  };

  return ApiResponse.success(res, healthData, 'Service is healthy');
});

export const getReadiness = asyncErrorHandler(async (req: Request, res: Response) => {
  const isReady = true;

  if (!isReady) {
    return ApiResponse.error(res, 'Service not ready', StatusCodes.SERVICE_UNAVAILABLE);
  }

  return ApiResponse.success(res, { ready: true }, 'Service is ready');
});

export const getLiveness = asyncErrorHandler(async (req: Request, res: Response) => {
  return ApiResponse.success(res, { alive: true }, 'Service is alive');
});

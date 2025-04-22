import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { AggregationTemporality } from '@opentelemetry/sdk-metrics';

export function middleware(request: NextRequest) {
  console.log('AggregationTemporality.delta', AggregationTemporality.DELTA);
  if (request.nextUrl.pathname.startsWith('/about')) {
    return NextResponse.rewrite(new URL('/about-2', request.url));
  }
}

export const config = {
  matcher: '/',
};

import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const apiUrl = 'https://app.gdacademy.et/api/v2/blogs/all';
    const response = await fetch(apiUrl, {
      headers: {
        'Accept': 'application/json',
        'Cache-Control': 'no-cache'
      },
      next: { revalidate: 0 }
    });
    
    if (!response.ok) {
      return NextResponse.json(
        { 
          error: `API request failed with status ${response.status}`,
          status: response.status,
          statusText: response.statusText
        },
        { status: 500 }
      );
    }
    
    const data = await response.json();
    return NextResponse.json({
      success: true,
      data,
      headers: Object.fromEntries(response.headers.entries())
    });
  } catch (error: any) {
    console.error('API Test Error:', error);
    return NextResponse.json(
      { 
        error: error.message || 'Failed to fetch from API',
        name: error.name,
        stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
      },
      { status: 500 }
    );
  }
}

export const dynamic = 'force-dynamic';

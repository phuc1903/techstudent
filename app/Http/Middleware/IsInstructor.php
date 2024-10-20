<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class IsInstructor
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if(auth()->check() && auth()->user()->role === "instructor") {
            return $next($request);
        }

        return redirect()->back()->with('notifications', [
            [
                'type' => 'error',
                'message' => 'Bạn không có quyền truy cập vào trang này. Hãy đăng ký làm instructor!'
            ]
        ]);
    }
}

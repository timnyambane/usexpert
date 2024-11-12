<?php

namespace App\Http\Middleware;

use App\Http\Resources\LocationResource;
use App\Models\Location;
use App\Models\Service;
use App\Models\WorkCategory;
use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return array_merge(parent::share($request), [
            'auth' => [
                'user' => $request->user()
            ],
            'flash' => function () {
                return [
                    'success' => session('success'),
                    'error' => session('error'),
                ];
            },
            'locations' => Location::orderBy('town')->get(),
            'work_categories' => WorkCategory::orderBy('name')->get(),
            'services' => Service::orderBy('name')->get(),
            // 'flash' => [
            //     'success' => $request->session()->get('success'),
            //     'error' => $request->session()->get('error'),
            // ]
        ]);
    }
}

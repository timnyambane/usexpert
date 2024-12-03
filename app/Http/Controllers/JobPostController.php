<?php

namespace App\Http\Controllers;

use App\Models\JobPost;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;



class JobPostController extends Controller
{
    public function index()
    {
        $jobPosts = JobPost::with(['user', 'location', 'workCategory', 'service'])->get();
        return Inertia::render('Dashboard', [
            'jobs' => $jobPosts,  // Passing the jobs as props to the Inertia component
        ]);
    }

    /**
     * Store a new job post.
     */
    public function store(Request $request)
    {
        try {
            $validatedData = [
                'user_id' => Auth::id(),
                'location_id' => $request->input('selectedLocation.id'),
                'work_category_id' => $request->input('selectedWorkCategory.id'),
                'service_id' => $request->input('selectedService.id'),
                'property_type' => $request->input('propertyType'),
                'urgency' => $request->input('urgency'),
                'title' => $request->input('jobTitle'),
                'desc' => $request->input('jobDesc'),
                'type' => $request->input('postType'),
            ];

            JobPost::create($validatedData);

            return redirect()->back()->with('success', 'Job posted successfully!');

        } catch (\Exception $e) {
            Log::error('Error creating job post', [$e->getMessage()]);
            return redirect()->back()->with('error', 'Error while posting the job!');
        }
    }
}

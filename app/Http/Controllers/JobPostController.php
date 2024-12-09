<?php

namespace App\Http\Controllers;

use App\Models\JobPost;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Carbon\Carbon;

class JobPostController extends Controller
{
    public function index()
    {
        $user = Auth::user();
        $jobPosts = JobPost::with(['location', 'workCategory', 'service'])
            ->where('user_id', $user->id)
            ->orderBy('created_at', 'desc')
            ->get()
            ->map(function ($jobPost) {
                $jobPost->urgency = Carbon::parse($jobPost->urgency)->format('j M Y');
                return $jobPost;
            });
        return response()->json($jobPosts);
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

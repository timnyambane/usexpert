<?php

namespace Database\Seeders;

use App\Models\WorkCategory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class WorkCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $workCategories = [
            [
                'name' => 'Cleaning',
                'services' => [
                    'Oven Cleaning',
                    'Carpet Cleaning',
                    'Gutter Cleaning',
                    'Window Cleaning',
                    'End of Lease Cleaning',
                    'Office Cleaning',
                    'Floor Polishing',
                    'Upholstery Cleaning',
                    'Pressure Washing'
                ]
            ],
            [
                'name' => 'Plumbing',
                'services' => [
                    'Pipe Installation',
                    'Leak Repairs',
                    'Drain Unblocking',
                    'Water Heater Repair',
                    'Toilet Installation',
                    'Bathroom Remodeling',
                    'Shower Repair',
                    'Septic Tank Maintenance'
                ]
            ],
            [
                'name' => 'Electrical',
                'services' => [
                    'Lighting Installation',
                    'Wiring Repair',
                    'Outlet Installation',
                    'Ceiling Fan Installation',
                    'Electrical Safety Inspection',
                    'Circuit Breaker Replacement',
                    'Home Rewiring',
                    'Surge Protection'
                ]
            ],
            [
                'name' => 'Landscaping',
                'services' => [
                    'Lawn Mowing',
                    'Garden Design',
                    'Tree Pruning',
                    'Mulching',
                    'Irrigation System Installation',
                    'Hedge Trimming',
                    'Soil Aeration'
                ]
            ],
            [
                'name' => 'Pest Control',
                'services' => [
                    'Termite Control',
                    'Rodent Control',
                    'Bed Bug Treatment',
                    'Mosquito Control',
                    'Cockroach Extermination',
                    'Ant Control',
                    'Wasp Nest Removal'
                ]
            ],
            [
                'name' => 'Painting',
                'services' => [
                    'Interior Painting',
                    'Exterior Painting',
                    'Wallpaper Removal',
                    'Deck Staining',
                    'Fence Painting',
                    'Ceiling Painting',
                    'Mural Painting'
                ]
            ],
            [
                'name' => 'Carpentry',
                'services' => [
                    'Custom Furniture',
                    'Cabinet Installation',
                    'Door Repair',
                    'Deck Building',
                    'Trim and Molding',
                    'Wood Restoration',
                    'Furniture Assembly',
                    'Flooring Installation'
                ]
            ],
            [
                'name' => 'HVAC',
                'services' => [
                    'Air Conditioning Installation',
                    'Furnace Repair',
                    'Duct Cleaning',
                    'Thermostat Installation',
                    'Ventilation Maintenance',
                    'AC Repair',
                    'Heat Pump Installation'
                ]
            ],
            [
                'name' => 'Automotive Services',
                'services' => [
                    'Oil Change',
                    'Tire Rotation',
                    'Brake Replacement',
                    'Battery Replacement',
                    'Transmission Repair',
                    'Car Detailing',
                    'Engine Diagnostic',
                    'AC Repair'
                ]
            ],
            [
                'name' => 'IT Support',
                'services' => [
                    'Computer Repair',
                    'Network Setup',
                    'Virus Removal',
                    'Software Installation',
                    'Data Backup',
                    'Hardware Upgrades',
                    'Wi-Fi Optimization',
                    'System Troubleshooting'
                ]
            ]
        ];

        foreach ($workCategories as $categoryData) {
            $category = WorkCategory::create(['name' => $categoryData['name']]);
            foreach ($categoryData['services'] as $serviceName) {
                $category->services()->create(['name' => $serviceName]);
            }
        }
    }
}

<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

use App\Models\Pet;
use App\Models\Category;
use App\Models\Tag;
use App\Models\Statu;
use App\Http\Requests\PetsFormRequest;
use App\Http\Resources\PetResource;

class PetsController extends Controller
{

    public function getCategories()
    {
        $categories = Category::all();
        return response()->json($categories);
    }

    public function getTags()
    {
        $tags = Tag::all();
        return response()->json($tags);
    }

    public function getStatus()
    {
        $status = Statu::all();

        return response()->json($status);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $pets = Pet::all();

        if($request->search){
            $pets = Pet::where('name', "like", "%{$request->search}%")->get();
        }elseif($request->status){
            $pets = Pet::where('status', "like", "%{$request->status}%")->get();
        }elseif($request->tags){
            $pets = Pet::where('tags', "like", "%{$request->tags}%")->get();
        }

        return PetResource::collection($pets);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(PetsFormRequest $request)
    {

        //dd($request->all());
         $pet = Pet::create($request->validated());
         return response()->json($pet);


    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Pet $pet)
    {
        return new PetResource($pet);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(PetsFormRequest $request, Pet $pet)
    {
        $pet->update($request->validated());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */

    public function destroy(Pet $pet)
    {
        $pet->delete();

        return response()->json('Pet Deleted Successfully');
    }


}

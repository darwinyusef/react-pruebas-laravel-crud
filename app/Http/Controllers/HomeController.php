<?php

namespace App\Http\Controllers;
use GuzzleHttp;
use GuzzleHttp\Subscriber\Oauth\Oauth1;
use App\Widgets;


use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view('home');
    }

    public function select(){
       return  $data = Widgets::all();
    }

    /*
    $client = new \GuzzleHttp\Client();
        $request = $client->request('POST', 'http://localhost:8000/api/user', [
            'headers' => [
                'Accept' => 'application/json',
            ],
            'form_params' => [
                'api_token' => '0ff3aec956a5da945f54a10f92824d024166908cd64d904fc7e6973a81eb92dc',
            ],
        ]); 
             
        dd($request->getBody());
     */

}

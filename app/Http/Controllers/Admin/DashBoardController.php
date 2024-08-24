<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class DashBoardController extends Controller
{
    public function dashboard(Request $request)
    {
        return User::where('id', $request->session()->get('user_id'))->first();
    }
}

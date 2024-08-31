<?php

namespace App\Http\Controllers\Admin;

use App\Exceptions\Error;
use App\Http\Controllers\Controller;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;

class DashBoardController extends Controller
{
    public function dashboard(Request $request)
    {
        try {
            $user = User::where('id', $request->session()->get('user_id'))->first();

            if (!$user) {
                throw new Error('User not found or session expired');
            }

            return [
                'auth' => true,
                'user' => $user
            ];

        } catch (Error $e) {
            return [
                'auth'      => false,
                'message'   => $e->getMessage()
            ];
        } catch (Exception $e) {
            return [
                'auth' => false
            ];
        }
    }
}

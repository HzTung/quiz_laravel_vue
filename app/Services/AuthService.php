<?php

namespace App\Services;

use Illuminate\Support\Facades\Auth;
use Exception;
use App\Repositories\User\UserRepositoryInterface;

class AuthService
{
    protected $userInterface;

    public function __construct(UserRepositoryInterface $userInterface)
    {
        $this->userInterface = $userInterface;
    }

    public function login($data)
    {
        try {

            if (! $token = auth()->attempt($data)) {
                return response()->json(['error' => 'Unauthorized'], 401);
            }
            return $this->createNewToken($token);
        } catch (\Throwable $th) {
            return response()->json(['error' => $th->getMessage()], 422);
        }
    }

    public function register($data)
    {
        try {
            $create = $this->userInterface->create($data);
            return response()->json(['message' => 'Register Successfully!'], 201);
        } catch (\Throwable $th) {
            return $th->getMessage();
        }
    }
    public function refresh()
    {
        try {
            return $this->createNewToken(auth()->refresh());
        } catch (\Throwable $th) {
            return response()->json(['error' => 'Token invalid!'], 401);
        }
    }

    protected function createNewToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60,
            'user' => auth()->user()
        ]);
    }


    public function profile()
    {
        try {
            return response()->json(['data' => auth()->user()], 200);
        } catch (\Throwable $th) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }
    }

    public function logout()
    {
        auth()->logout();

        return response()->json(['message' => 'Successfully logged out'], 203);
    }
}

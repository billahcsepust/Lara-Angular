<?php

namespace App\Http\Controllers;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\ResetPasswordMail;
use App\User;

class ResetPasswordController extends Controller
{
    public function sendEmail(Request $request)
    {
        if(!$this->validateEmail($request->email))
        {
            return $this->failedResponse();
        }
        $this->send($request->email);
       return  $this->successResponse();
    }
    public function send($email)
    {
        Mail::to($email)->send(new ResetPasswordMail);
    }
    public function validateEmail($email)
    {
        return !!User::where('email',$email)->first();
    }
    public function failedResponse()
    {
        return response()->json([
            'error'=>'Email does\'t found on our database'
        ] , Response:: HTTP_NOT_FOUND);
    }
    public function successResponse()
    {
        return response()->json([
            'data'=>'Reset Email is send successfully,please check your inbox.'
        ],Response::HTTP_OK);
    }
}

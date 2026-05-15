'use client';
import { Card } from '@heroui/react';
import { Check } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { authClient } from '@/lib/auth-client';
import { redirect } from 'next/navigation';
import { FcGoogle } from 'react-icons/fc';

const LoginPage = () => {

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const user = Object.fromEntries(formData.entries());
        console.log(user)
        const { data, error } = await authClient.signIn.email({
            email: user.email,
            password: user.password,
            callbackURL: '/',
        });
        console.log({ data, error })
        if (error) {
            alert(`Error: ${error.message}`);
        } else {
            alert('Login successful!');
            redirect('/');
        }
    }

     const handleGoogleLogin = async () => {
            const data = await authClient.signIn.social({
                provider: "google",
              });
        }

    return (
        <div className='max-w-7xl mx-auto my-40'>
            <h1 className='text-3xl font-bold text-center mb-3 text-gray-600'>Login Here</h1>
            <Card className="mx-auto w-full max-w-md p-6 shadow-lg border border-gray-200">
                <Form className="flex w-96 flex-col gap-4" onSubmit={handleSubmit}>
                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }
                            return null;
                        }}
                    >
                        <Label>Email</Label>
                        <Input placeholder="john@example.com" />
                        <FieldError />
                    </TextField>
                    <TextField
                        isRequired
                        minLength={8}
                        name="password"
                        type="password"
                    >
                        <Label>Password</Label>
                        <Input placeholder="Enter your password" />
                        <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                        <FieldError />
                    </TextField>
                    <div className="flex flex-col gap-1 mt-4">
                        <Button className='w-full rounded-sm' type="submit">
                            <Check />
                            Submit
                        </Button>
                        <p className="text-center text-gray-500 my-2">OR</p>
                        <Button className='w-full rounded-sm flex justify-center items-center gap-2' onClick={handleGoogleLogin} variant="outline">
                            <FcGoogle></FcGoogle> <span> Sign In with Google</span>
                        </Button>
                    </div>
                </Form>
            </Card>
        </div>
    );
};

export default LoginPage;
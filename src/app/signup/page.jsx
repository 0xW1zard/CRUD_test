'use client';
import { Card } from '@heroui/react';
import { Check } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { authClient } from '@/lib/auth-client';
import { BsGoogle } from 'react-icons/bs';

const SignUpPage = () => {

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const user = Object.fromEntries(formData.entries());
        console.log("User data:", user);

        const { data, error } = await authClient.signUp.email({
            name: user.name,
            email: user.email,
            password: user.password,
            image: user.image,
            callbackURL: '/',
        });
        console.log("Sign-up response:", { data, error });

        if (error) {
            alert(`Error: ${error.message}`);
        } else {
            alert('Sign-up successful!');
        }
    }

    const handleGoogleSignUp = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
          });
    }

    return (
        <div className='max-w-7xl mx-auto my-40'>
        <h1 className='text-3xl font-bold text-center mb-3 text-gray-600'>Sign Up Here</h1>
            <Card className="mx-auto w-full max-w-md p-6 shadow-lg border border-gray-200">
                <Form className="flex w-96 flex-col gap-4" onSubmit={handleSubmit}>
                    <TextField
                        isRequired
                        name="name"
                        type="text"
                    >
                        <Label>Name</Label>
                        <Input placeholder="John Doe" />
                        <FieldError />
                    </TextField>
                    <TextField
                        name="image"
                        type="text"
                    >
                        <Label>Image</Label>
                        <Input placeholder="Image URL" />
                        <FieldError />
                    </TextField>
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
                    <div className="w-full">
                        <Button className='w-full rounded-sm' type="submit">
                            <Check />
                            Submit
                        </Button>
                        <p className="text-center text-gray-500 my-2">OR</p>
                        <Button className='w-full rounded-sm flex justify-center items-center gap-2' onClick={handleGoogleSignUp} variant="outline">
                          <BsGoogle></BsGoogle> <span> Sign Up with Google</span>
                        </Button>
                    </div>
                </Form>
            </Card>
        </div>
    );
};

export default SignUpPage;
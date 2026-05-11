'use client'
import React from 'react';
import { AlertDialog, Button } from "@heroui/react";
import { TbTrash } from 'react-icons/tb';
import { redirect } from 'next/navigation';

const Delete = ({ data }) => {
    const { _id, destinationName } = data;

    const handleDelete = async () => {

        const res = await fetch(`http://localhost:5000/destinations/${_id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const result = await res.json()
        redirect('/destinations')
        console.log(result)

        



    }

    return (
        <div>
            <AlertDialog>
                <Button variant="bordered" size="sm" className="flex items-center justify-center rounded-none border border-gray-300 hover:bg-red-200">
                    <TbTrash></TbTrash> Delete
                </Button>
                <AlertDialog.Backdrop>
                    <AlertDialog.Container>
                        <AlertDialog.Dialog className="sm:max-w-100 rounded-none">
                            <AlertDialog.CloseTrigger />
                            <AlertDialog.Header>
                                <AlertDialog.Icon status="danger" />
                                <AlertDialog.Heading>Delete {destinationName} permanently?</AlertDialog.Heading>
                            </AlertDialog.Header>
                            <AlertDialog.Body>
                                <p>
                                    This will permanently delete <strong>{destinationName}</strong> and all of its
                                    data. This action cannot be undone.
                                </p>
                            </AlertDialog.Body>
                            <AlertDialog.Footer>
                                <Button slot="close" variant="tertiary" className='rounded-none'>
                                    Cancel
                                </Button>
                                <Button slot="close" variant="danger" className='rounded-none' onClick={handleDelete}>
                                    Delete Project
                                </Button>
                            </AlertDialog.Footer>
                        </AlertDialog.Dialog>
                    </AlertDialog.Container>
                </AlertDialog.Backdrop>
            </AlertDialog>
        </div>
    );
};

export default Delete;
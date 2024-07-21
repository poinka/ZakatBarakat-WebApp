"use client"; 

import React, { useState } from 'react';
import Funds from "../app/types";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface FundsListEditProps {
    fund: Funds;
    onDelete: (id: number) => void;
}

export default function CourseListEdit({ fund, onDelete }: FundsListEditProps) {
    const [showConfirm, setShowConfirm] = useState(false);

    const handleDelete = () => {
        onDelete(fund.id);
        setShowConfirm(false);
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px', padding: '10px', border: '1px solid #ccc', margin: '5%' }}>
            <div>{fund.name}</div>
            <div style={{ display: 'flex', gap: '10px' }}>
                <Button variant="secondary" asChild>
                    <Link href={`editFunds/${fund.id}`}>Edit</Link>
                </Button>
                <Button variant="destructive" onClick={() => setShowConfirm(true)}>Delete</Button>
            </div>
            {showConfirm && (
                <div>
                    <p className="text-xs lg:text-lg">Are you sure you want to delete this fund?</p>
                    <Button variant="destructive" onClick={handleDelete}>Confirm</Button>
                    <Button variant="outline" onClick={() => setShowConfirm(false)}>Cancel</Button>
                </div>
            )}
        </div>
    );
}

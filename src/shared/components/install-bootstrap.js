"use client";
import { useEffect } from "react";
export default function InstallBoostrap() {
    useEffect(() => {
        import("bootstrap/dist/js/bootstrap.min.js");
    }, []);
    return <></>;
}
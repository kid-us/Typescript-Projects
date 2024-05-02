import { useEffect, useState } from "react";
import userService, { User } from "../services/user-service";
import { CanceledError } from "../services/api-clients";

export const useUser = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [errors, setErrors] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        const { request, cancel } = userService.getAll();

        request
            .then((response) => {
                setIsLoading(false);
                setUsers(response.data);
            })
            .catch((error) => {
                if (error instanceof CanceledError) return;
                setErrors(error.message);
                setIsLoading(false);
            });

        return () => cancel();
    }, []);

    return { users, errors, isLoading, setErrors, setUsers };
};

// api.ts
const API_BASE_URL = 'https://your-api-base-url.com';

interface RegistrationResponse {
    token: string;
    // Add other properties as needed based on your API response
}

interface UserRegistrationData{
    username: string,
    email: string,
    password:string
}

export const registerUser = async (userData: UserRegistrationData): Promise<RegistrationResponse> => {

    console.log(userData,'user reached here');
    
    try {
        const response = await fetch(`${API_BASE_URL}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        if (!response.ok) {
            throw new Error('Registration failed');
        }

        const data: RegistrationResponse = await response.json();
        return data;
    } catch (error) {
        console.error('Error registering user:', error);
        throw error;
    }
};

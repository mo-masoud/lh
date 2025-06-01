import { SignInDialog } from './sign-in-dialog';
import { SignUpDialog } from './sign-up-dialog';

export const HeaderAuthButtons = () => {
    return (
        <div className="flex items-center gap-3">
            <SignInDialog />
            <SignUpDialog />
        </div>
    );
};

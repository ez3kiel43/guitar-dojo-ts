import { createClient } from '../utils/server';

export default async function resetPassword() {
	const supabase = await createClient();

	async function updatePassword(formData: FormData) {
		const newPass = formData.get('newPass') as string;
		const confirmPass = formData.get('confirmNewPass') as string;

		if (newPass === confirmPass) {
			supabase.auth.updateUser({
				password: confirmPass,
			});
		} else {
			alert('passwords must match');
		}
	}

	return (
		<>
			<form>
				<label htmlFor="newPass">
					New Password:
					<input type="password" id="newPass" name="newPass" />
				</label>

				<label htmlFor="confirmNewPass">
					Confirm New Password:
					<input
						type="password"
						id="confirmNewPass"
						name="confirmNewPass"
					/>
				</label>
				<button formAction={updatePassword}>Update Password</button>
			</form>
		</>
	);
}

export const Footer = () => {
    return (
        <div className="flex text-sm flex-row w-full justify-between items-center p-6 text-gray-600" style={{
            backgroundColor: "#F9FAFB"
        }}>
            <p className="cursor-pointer">
                © 1811 Labs. All rights reserved.
            </p>
            <div className="flex flex-row gap-x-4">
                <p className="cursor-pointer">
                    Privacy Policy
                </p>
                <p className="cursor-pointer">
                    Terms and conditions
                </p>
            </div>
        </div>
    )
}
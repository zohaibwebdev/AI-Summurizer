'use client'
import Navigation from '../shared/components/navigation/navigation.component'
import Header from '@/shared/components/header/header.component'
import CustomInput from '@/shared/components/custom-input/input.component'
const page = () => {
    return (
        <div className="h-[100vh] flex flex-col items-center justify-start gap-5 max-w-7xl">
            <Navigation />
            <Header />
            <CustomInput type="url" placeholder="Enter Article Link" required />
        </div>
    )
}

export default page

'use client'
import CustomButton from '@/shared/components/custom-button/custom-button.component'
import Navigation from '../shared/components/navigation/navigation.component'
import Header from '@/shared/components/header/header.component'
import { CustomButtonTypes } from '@/shared/components/custom-button/custom-button.types'
const page = () => {
    return (
        <div className="h-[100vh] flex flex-col items-center justify-start gap-5 max-w-7xl">
            <Navigation />
            <Header />
            <CustomButton type={CustomButtonTypes.SECONDARY}>zohaib</CustomButton>
        </div>
    )
}

export default page

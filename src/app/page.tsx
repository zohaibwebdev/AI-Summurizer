'use client'
import CustomButton from '@/shared/components/custom-button/custom-button.component'
import Navigation from '../shared/components/navigation/navigation.component'
import Header from '@/shared/components/header/header.component'
const page = () => {
    const handleClick = () => {
        console.log('click')
    }
    return (
        <div className="h-[100vh] flex flex-col items-center justify-start gap-5 max-w-7xl">
            <Navigation />
            <Header />
            <CustomButton value="submit" onClick={handleClick} />
        </div>
    )
}

export default page

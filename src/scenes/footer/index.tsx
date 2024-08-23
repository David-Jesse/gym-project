import Logo from '@/assets/Logo.png'


const Footer = () => {
  return (
    <footer className='bg-primary-100 py-16'>
        <div className='justify-content mx-auto w-5/6 gap-16 md:flex'>
            <div className='mt-16 basis-1/2 md:mt-0'>
                <img src={Logo} alt="logo" />
                <p className='my-5'>
                    Sweat is a testimony to your dedication, come transform your body, and in turn transform
                    your life. Looking forward to having you!
                </p>
                <p>&copy; Evogym All Right Reserved. </p>
            </div>

            <div className='mt-16 basis-1/4 md:mt-0'>
                <h4 className='font-bold'>Links</h4>
                <p className='my-5'>Come get your groove on</p>
                <p className='my-5'>I insist, come get your groove on!</p>
                <p>Ullamcorper vivamus</p>
            </div>

            <div className='mt-16 basis-1/4 md:mt-0'>
                <h4 className='font-bold'>Contact Us</h4>
                <p className='my-5'>Please feel free to reach out to us anytime, we are here for you.</p>
                <p className='my-5'>We've got a dedicate team of agents to answer all your questions and help steer you towards the right direction.</p>
                <p>(333)4132-90292</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer;
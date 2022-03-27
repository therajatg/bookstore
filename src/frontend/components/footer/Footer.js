import './footer.css'

export function Footer() {
  return (
    <div className="footer">
         <ul>
             <li className='footer-header'>About</li>
             <li>Contact Us</li>
             <li>About Us</li>
             <li>Careers</li>
         </ul>
         <ul>
            <li className='footer-header'>Help</li>
            <li>Payments</li>
            <li>Shipping</li>
            <li>Cancellation & Returns</li>
         </ul>
         <ul>
             <li className='footer-header'>Policy</li>
             <li>Return Policy</li>
             <li>Terms Of Use</li>
             <li>Privacy</li>
         </ul>
         <ul>
             <li className='footer-header'>Social</li>
             <li>Facebook</li>
             <li>Twitter</li>
             <li>Youtube</li>
         </ul>
         <div style={{width: "15%"}}>
             <p className='footer-header'>Registered Office:</p> 
             <p>
                Kitab Technologies Private Limited,
                Buildings Alyssa, Begonia &
                Clove Embassy Tech Village,
                Bengaluru, 110032,
                Karnataka, India
             </p>
             
         </div>
    </div>
  )
}
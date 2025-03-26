import React from "react"
import './Services.css'
import { FaBook , FaCalculator, FaMoneyCheckAlt , FaClipboardCheck ,FaMoneyBillWave, FaFileInvoice } from "react-icons/fa";


 function Services() {
    return(
        <div>
    
            <div  className="bg-white border-gray-200 px-4 h-20 lg:px-6 py-2.5 mt-4">
                <h1 className="font-helvetica text-3xl text-center font-bold">Our Services</h1>
                <h3 className=" text-gray-400 mt-2 text-center"> We Provide you varity of services </h3>

                <img src="/Aboutus1.jpg" className='w-full h-full mb-4'alt="" />
            </div>

            <div id="service" className="py-5 mt-28">
                <div className="row mb-5">
                    <div className="boxs">
                        
                            <h3><FaBook/> 
                                Bookkeeping
                            </h3>
                            <p>
                             Precise and timely recording of financial transactions to maintain well-organized financial records.
                            </p>
                    </div>
                    <div className="boxs">
                            <h3>    
                            <FaCalculator/>
                            	Accounting
                            </h3>
                            <p>Holistic accounting solutions to ensure your financial statements are accurate and compliant.</p>
                    </div>
                    <div className="boxs">
                            <h3>
                                <FaMoneyCheckAlt/>
                                Accounts Payable & Receivable Management
                            </h3>
                            <p>Streamlined handling of payables and receivables to optimize cash flow.</p>
                    </div>
                   
                </div> 
                <div className="row">
                    <div className="boxs">
                            <h3>

                            <FaClipboardCheck /> 
                                Audit Preparation
                            </h3>
                            <p>Comprehensive assistance in preparing and organizing financial data for seamless audits.</p>
                    </div>
                    <div className="boxs">
                            <h3>
                                <FaMoneyBillWave />
                               Payroll Processing
                            </h3>
                            <p>Dependable payroll management to ensure timely and accurate employee payments.</p>
                    </div>
                    
                    <div className="boxs">
                            <h3>< FaFileInvoice/>

                            	Tax Preparation & Compliance
                            </h3>
                            <p>Expert guidance on tax planning and preparation to ensure compliance with local regulations.</p>
                    </div>

                    </div>

                    <div className="row mt-5">
                    <div className="boxs">
                            <h3>< FaFileInvoice/>

                            Reporting and Budgeting 
                            </h3>
                            <p>Helps in analyzing financial data, tracking expenses, and creating accurate forecasts to optimize business growth.</p>
                    </div>
                    <div className="boxs">
                            <h3>< FaFileInvoice/>

                            Cashflow management 
                            </h3>
                            <p>Ensures smooth financial operations by monitoring incoming and outgoing cash, preventing shortages, and maintaining liquidity.</p>
                    </div>
                    <div className="boxs">
                            <h3>< FaFileInvoice/>

                            Bookkeeping Clean-up
                            </h3>
                            <p>Involves reviewing, correcting, and organizing financial records to eliminate errors, reconcile accounts, and ensure compliance.

</p>
                    </div>
                </div>


            </div>
        </div>
        
    )
 }
 export default Services
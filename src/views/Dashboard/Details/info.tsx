import { useState, useEffect } from "react";
import "./info.scss"

type detailsProps = {
    firstName: string;
    lastName: string;
    phoneNumber: number;
    gender: string;
    address: Text;
    currency: string;
    guarantor: string;
    accountBalance: Float32Array;
    accountNumber: Text;
    socials: {
        facebook: Text;
        instagram: Text;
        twitter: Text;
    }
    employmentStatus: string;
    education: {
        level: string;
    }
    userName: string;
    monthlyIncome: Float32Array;
    sector: string;
    duration: Text;
    officeEmail: Text

  };

export default function Info() {

    const [details, setDetails] = useState<detailsProps[]>([]);
    
    useEffect(() => {
        const api = async () => {
          const data = await fetch("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users", {
            method: "GET"
          });
          const jsonData = await data.json();
          setDetails(jsonData.results);
        };
    
        api();
      }, []);
    
    return (
        <div className="info">
            <div>
                {/* Personal Information */}
                <h5>Personal Information</h5>
                <div className="detail">
                    <div>
                        <h6>FULL NAME</h6>
                        <p>Grace Effiom</p>
                    </div>
                    <div>
                        <h6>PHONE NUMBER</h6>
                        <p>07060780922</p>
                    </div>
                    <div>
                        <h6>EMAIL ADDRESS</h6>
                        <p>grace@gmail.com</p>
                    </div>
                    <div>
                        <h6>BVN</h6>
                        <p>07060780922</p>
                    </div>
                    <div>
                        <h6>GENDER</h6>
                        <p>Female</p>
                    </div>
                    <div>
                        <h6>MARITAL STATUS</h6>
                        <p>Single</p>
                    </div>
                    <div>
                        <h6>CHILDREN</h6>
                        <p>None</p>
                    </div>
                    <div>
                        <h6>TYPE OF RESIDENT</h6>
                        <p>Parent's Apartment</p>
                    </div>
                </div>

                {/* Education and Employment */}
                <h5>Education and Employment</h5>
                <div className="detail">
                    <div>
                        <h6>LEVEL OF EDUCATION</h6>
                        <p>Bsc</p>
                    </div>
                    <div>
                        <h6>EMPLOYMENT STATUS</h6>
                        <p>Employed</p>
                    </div>
                    <div>
                        <h6>SECTOR OF EMPLOYMENT</h6>
                        <p>FinTech</p>
                    </div>
                    <div>
                        <h6>DURATION OF EMPLOMENT</h6>
                        <p>2 years</p>
                    </div>
                    <div>
                        <h6>OFFICE EMAIL</h6>
                        <p>grace@lendsqr.com</p>
                    </div>
                    <div>
                        <h6>MONTHLY INCOME</h6>
                        <p>₦200,000.00- ₦400,000.00</p>
                    </div>
                    <div>
                        <h6>LOAN REPAYMENT</h6>
                        <p>40,000</p>
                    </div>
                </div>

                {/* Socials */}
                <h5>Socials</h5>
                <div className="detail">
                    <div>
                        <h6>TWITTER</h6>
                        <p>@grace_effiom</p>
                    </div>
                    <div>
                        <h6>FACEBOOK</h6>
                        <p>Grace Effiom</p>
                    </div>
                    <div>
                        <h6>INSTAGRAM</h6>
                        <p>@grace_effiom</p>
                    </div>
                    
                    {/* Guarantor */}
                    <h5>Guarantor</h5>
                    <div className="detail">
                        <div>
                            <h6>FULL NAME</h6>
                            <p>Debby Ogana</p>
                        </div>
                        <div>
                            <h6>PHONE NUMBER</h6>
                            <p>07060780922</p>
                        </div>
                        <div>
                            <h6>EMAIL</h6>
                            <p>debby@gmail.com</p>
                        </div>
                        <div>
                            <h6>RELATIONSHIP</h6>
                            <p>Sister</p>
                        </div>
                    </div>

                    {/* Extra */}
                    <div className="detail">
                        <div>
                            <h6>FULL NAME</h6>
                            <p>Debby Ogana</p>
                        </div>
                        <div>
                            <h6>PHONE NUMBER</h6>
                            <p>07060780922</p>
                        </div>
                        <div>
                            <h6>EMAIL</h6>
                            <p>debby@gmail.com</p>
                        </div>
                        <div>
                            <h6>RELATIONSHIP</h6>
                            <p>Sister</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    )
}
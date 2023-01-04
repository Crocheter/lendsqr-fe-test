import React, {useState} from "react";
import filter from "../../assets/filter.svg"
import more from "../../assets/more.svg"
import "./details-table.scss"
import Filter from "./filter"
import More from "./more"

export default function DetailsTable() {

    const [isOpenFilter, setIsOpenFilter] = useState(false);
    const [isOpenMore, setIsOpenMore] = useState(false);

    const handleClick = (event: any) => {
        setIsOpenFilter(!isOpenFilter);
    };

    const handlesClick = (event: any) => {
        setIsOpenMore(!isOpenMore);
    }

    
    return (
        <div className="detailed">
            {isOpenFilter && <Filter/>}
            <table>
                <tr>
                    <th onClick={handleClick}>ORGANISATION<img src={filter} alt="" /></th>
                    <th>USERNAME <img src={filter} alt="" /></th>
                    <th>EMAIL <img src={filter} alt="" /></th>
                    <th>PHONE NUMBER <img src={filter} alt="" /></th>
                    <th>DATE JOINED <img src={filter} alt="" /></th>
                    <th>STATUS <img src={filter} alt="" /></th>
                </tr>
                <tr className="border">
                    <td>Lendsqr</td>
                    <td>Adedeji</td>
                    <td>Adedeji@lendsqr.com</td>
                    <td>08078903721</td>
                    <td>May 16, 2020 10:00AM</td>
                    <td><button  className="status">Inactive</button></td>
                    <td onClick={handlesClick} className="more-container"><img src={more} alt="" /></td>
                    {isOpenMore && <More/>}
                </tr>
                <tr>
                    <td>Irorun</td>
                    <td>Debby Ogana</td>
                    <td>debby2@irorun.com</td>
                    <td>08160780928</td>
                    <td>Apr 30, 2020 10:00 AM</td>
                    <td><button  className="status1">Pending</button></td>
                    <td onClick={handlesClick} className="more-container"><img src={more} alt="" /></td>
                </tr>
                <tr>
                    <td>Lendsqr</td>
                    <td>Grace Effiom</td>
                    <td>grace@lendstar.com</td>
                    <td>07060780922</td>
                    <td>Apr 30, 2020 10:00 AM</td>
                    <td><button  className="status2">Backlisted</button></td>
                    <td onClick={handlesClick} className="more-container"><img src={more} alt="" /></td>
                </tr>
                <tr>
                    <td>Lendsqr</td>
                    <td>Tosin Dokunmu</td>
                    <td>tosin@lendstar.com</td>
                    <td>07003309226</td>
                    <td>Apr 10, 2020 10:00 AM</td>
                    <td><button  className="status1">Pending</button></td>
                    <td onClick={handlesClick} className="more-container"><img src={more} alt="" /></td>
                </tr>
                <tr>
                    <td>Lendsqr</td>
                    <td>Grace Effiom</td>
                    <td>grace@lendstar.com</td>
                    <td>07060780922</td>
                    <td>Apr 30, 2020 10:00 AM</td>
                    <td><button  className="status3">Active</button></td>
                    <td onClick={handlesClick} className="more-container"><img src={more} alt="" /></td>
                </tr>
                <tr>
                    <td>Lendsqr</td>
                    <td>Tosin Dokunmu</td>
                    <td>tosin@lendstar.com</td>
                    <td>07003309226</td>
                    <td>Apr 10, 2020 10:00 AM</td>
                    <td><button  className="status3">Active</button></td>
                    <td onClick={handlesClick} className="more-container"><img src={more} alt="" /></td>
                </tr>
                <tr>
                    <td>Lendsqr</td>
                    <td>Grace Effiom</td>
                    <td>grace@lendstar.com</td>
                    <td>07060780922</td>
                    <td>Apr 30, 2020 10:00 AM</td>
                    <td><button  className="status2">Backlisted</button></td>
                    <td onClick={handlesClick} className="more-container"><img src={more} alt="" /></td>
                </tr>
                <tr>
                    <td>Lendsqr</td>
                    <td>Tosin Dokunmu</td>
                    <td>tosin@lendstar.com</td>
                    <td>07003309226</td>
                    <td>Apr 10, 2020 10:00 AM</td>
                    <td><button  className="status">Inactive</button></td>
                    <td onClick={handlesClick} className="more-container"><img src={more} alt="" /></td>
                </tr>
                <tr>
                    <td>Lendsqr</td>
                    <td>Grace Effiom</td>
                    <td>grace@lendstar.com</td>
                    <td>07060780922</td>
                    <td>Apr 30, 2020 10:00 AM</td>
                    <td><button  className="status">Inactive</button></td>
                    <td onClick={handlesClick} className="more-container"><img src={more} alt="" /></td>
                </tr>
            </table>

        </div>
    )
}
import "./page-nav.scss"
export default function PageNav() {
    return (
        <div>
            <p>Showing 
                <span>
                    100
                    <img src="../../assets/drop-down.svg" alt="" />
                </span>
                out of 100
            </p>
            <div>
                <img src="../../assets/prevbtn.svg" alt="" />
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>...</span>
                <span>15</span>
                <span>16</span>
                <img src="../../assets/nextbn.svg" alt="" />
            </div>
        </div>
    )
}
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import moment from "moment";
import "./../stylings/Booking.css";
import Header from "../components/Header";
import DeskList from "../components/DeskList";
import DisplayCalendar from "../components/DisplayCalender";
import BookingsAccessibilityBanner from "../components/BookingsAccessibilityBanner";
import BookingSVG from "../components/BookingSVG";
import ListCalendar from "../components/ListCalendar";
import DeskListBooker from "../components/DeskListBooker";
import Footer from "../components/Footer";
import useWindowDimensions from "../components/useWindowDimensions";

export default function BookingPage(props) {

	//  ↓↓↓↓↓ globalUserDetails useState AND setGlobalUserDetails setState ↓↓↓↓↓
    let globalUserDetails = props.globalUserDetails;
    let setGlobalUserDetails = props.setGlobalUserDetails;
    console.log(globalUserDetails);
    //  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑


	//  ↓↓↓↓↓↓↓ Global useState and setState for Current Booking Information ↓↓↓↓↓↓
	let globalBookingInfo = props.globalBookingInfo;
    let setGlobalBookingInfo = props.setGlobalBookingInfo;
    console.log(globalBookingInfo);
    //  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

	const [selectedDateParent, setSelectedDateParent] = useState(moment().format("YYYY-MM-D"));
	console.log(selectedDateParent);


	function ConditionalDisplay(bool){
		if (bool == true){
			return (
				<BookingSVG globalBookingInfo={globalBookingInfo} setGlobalBookingInfo={(data)=>setGlobalBookingInfo(data)}
				selectedDateParent={selectedDateParent} setSelectedDateParent={(data)=>setSelectedDateParent(data)}
				globalUserDetails={globalUserDetails} setGlobalUserDetails={(data)=>setGlobalUserDetails(data)} />
			);
		}
	}

	const { height, width } = useWindowDimensions();

	console.log("width" + width)


	return (
		<div className="BookingPageOuterWrapper">

			<div className="BookingPageInnerHeaderWrapper">
				<h2>Desk booking</h2>
				<h4>Plan your visit in 2 simple steps. Get started below.</h4>
			</div>

			
			<div className="BookingPageInnerMainWrapper">

				<BookingsAccessibilityBanner globalUserDetails={globalUserDetails} setGlobalUserDetails={(data)=>setGlobalUserDetails(data)} />

				{/* <DisplayCalendar selectedDateParent={selectedDateParent} setSelectedDateParent={(data)=>setSelectedDateParent(data)}
				globalUserDetails={globalUserDetails} setGlobalUserDetails={(data)=>setGlobalUserDetails(data)}/> */}

				<ListCalendar globalBookingInfo={globalBookingInfo} setGlobalBookingInfo={(data)=>setGlobalBookingInfo(data)}
				selectedDateParent={selectedDateParent} setSelectedDateParent={(data)=>setSelectedDateParent(data)}
				globalUserDetails={globalUserDetails} setGlobalUserDetails={(data)=>setGlobalUserDetails(data)} />


				{(globalBookingInfo.date_booked != "" && (globalBookingInfo.am != false || globalBookingInfo.pm != false)) ? (

            	    (width < 800) ? (
						<DeskList globalBookingInfo={globalBookingInfo} setGlobalBookingInfo={(data)=>setGlobalBookingInfo(data)}
						selectedDateParent={selectedDateParent} setSelectedDateParent={(data)=>setSelectedDateParent(data)}
						globalUserDetails={globalUserDetails} setGlobalUserDetails={(data)=>setGlobalUserDetails(data)}
						/>
					):(
						<BookingSVG globalBookingInfo={globalBookingInfo} setGlobalBookingInfo={(data)=>setGlobalBookingInfo(data)}
						selectedDateParent={selectedDateParent} setSelectedDateParent={(data)=>setSelectedDateParent(data)}
						globalUserDetails={globalUserDetails} setGlobalUserDetails={(data)=>setGlobalUserDetails(data)} />
					)
					
					
					

            	) : (
            	    <div className="ListCalenderBannerWrapper">
            	        <h3>3. Choose Your desk</h3>
            	    </div>
            	)}


				{(globalBookingInfo.desk_id != "" && globalBookingInfo.date_booked != "" && (globalBookingInfo.am != false || globalBookingInfo.pm != false)) ? (

            	    <DeskListBooker globalBookingInfo={globalBookingInfo} setGlobalBookingInfo={(data)=>setGlobalBookingInfo(data)}
					selectedDateParent={selectedDateParent} setSelectedDateParent={(data)=>setSelectedDateParent(data)}
					globalUserDetails={globalUserDetails} setGlobalUserDetails={(data)=>setGlobalUserDetails(data)} />

            	) : (
            	    <div className="bookingDropdown">
            	        <h3>4.Submit Your Booking</h3>
            	    </div>
            	)}




				{/* <DeskList globalBookingInfo={globalBookingInfo} setGlobalBookingInfo={(data)=>setGlobalBookingInfo(data)}
				selectedDateParent={selectedDateParent} setSelectedDateParent={(data)=>setSelectedDateParent(data)}
				globalUserDetails={globalUserDetails} setGlobalUserDetails={(data)=>setGlobalUserDetails(data)}
				/> */}

			</div>

			



            <Footer />
		</div>
	);
}







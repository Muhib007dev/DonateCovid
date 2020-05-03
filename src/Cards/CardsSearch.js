import React from 'react'
import "./Styles/Cards.css"


function CardsSearch(props) {

    if (props.stateName.includes("Andhra")) {
        return (
            <div className="flex" id="box">
 
 <div class="box color1" id="box">
             <h2 className="mainstate">Andhra Pradesh</h2>
             <p><a href="https://apcmrf.ap.gov.in/" target="blank">Chief Minister's Relief Fund</a></p>
             <p><a href="https://www.akshayapatra.org/covid-relief-services" target="blank">Akshaya Patra Food Relief (Available in several states) </a></p>
         </div>
                </div>
            
        )
    }

    else if (props.stateName.includes("Arunachal")) {
        return (
            <div className="flex" id="box">

<div class="box color2" id="box">
             <h2 className="mainstate">Arunachal Pradesh</h2>
             <p><a href="http://covid19.itanagarsmartcity.in/" target="blank">Arunachal Pradesh State Control Room</a></p>
              <p><a href="http://mcksfood.com/" target="blank">MCKS Food for the Hungry Foundation</a></p>
         </div>
                </div>
                )
    }

    else if (props.stateName.includes("Assam")) {
        return (
            <div className="flex" id="box">

<div class="box color3" id="box">
             <h2 className="mainstate">Assam</h2>
             <p><a href="https://nhm.assam.gov.in/portlets/join-us-to-fight-covid-19" target="blank">Government of Assam</a></p>   
             <p><a href="https://kashtakaripanchayat.org" target="blank">Kashtakari Panchayat</a></p>

         </div>
            </div>
        )
    }
    else if (props.stateName.includes("Bihar")) {
        return (
            <div className="flex" id="box">

<div class="box color4" id="box">
             <h2 className="mainstate">Bihar</h2>
             <p><a href="http://www.cmrf.bih.nic.in/users/home.aspx" target="blank">Chief Minister Relief Fund</a></p>
             <p><a href="https://www.careindia.org/covid-19/" target="blank">Care India</a></p>
             <p><a href="http://www.chikkafederation.org/index.php?ref=home" target="blank">Chikka Federation of India</a></p>
         </div>
            </div>
        )
    }
    else if (props.stateName.includes("Chhattisgarh")) {
        return (
            <div className="flex" id="box">

<div class="box color5" id="box">
             <h2 className="mainstate">Chhattisgarh</h2>
             <p><a href="http://cmrf.cg.gov.in/" target="blank">Chief Minister Relief Fund</a></p>
             <p><a href="https://samarthan.org/" target="blank">Samarthan</a></p>
         </div>
            </div>
        )
    }
    else if (props.stateName.includes("Goa")) {
        return (
            <div className="flex" id="box">

<div class="box color6" id="box">
             <h2 className="mainstate">Goa</h2>
             <p><a href="https://www.goa.gov.in/covid-19/" target="blank">Official Chief Minister Website</a></p>
         </div>

            </div>
        )
    }
    else if (props.stateName.includes("Gujarat")) {
        return (
            <div className="flex" id="box">

<div class="box color7" id="box">
             <h2 className="mainstate">Gujarat</h2>
             <p><a href="https://cmogujarat.gov.in/en/cmrf/" target="blank">Gujarat CMO</a></p>
             <p><a href="https://saath.org/" target="blank">Saath</a></p>
         </div>
            </div>
        )
    }
    else if (props.stateName.includes("Haryana")) {
        return (
            <div className="flex" id="box">

                <div className="box color8" id="box">
                    <h2 className="mainstate">Haryana</h2>
                    <p><a href="https://panipat.gov.in/notice_category/covid-19/" target="blank">Haryana Corona Relief Fund</a></p>
                    <p><a href="http://www.clothesboxfoundation.org/covid19" target="blank">Clothes Box Foundation</a></p>

                </div>
            </div>
        )
    }
    else if (props.stateName.includes("Himachal Pradesh")) {
        return (
            <div className="flex" id="box">

                <div className="box color1" id="box">
                    <h2 className="mainstate">Himachal Pradesh</h2>
                    <p><a href="https://cmhimachal.nic.in/index.php/donation/individual" target="blank">Chief Minister
             Relief Fund </a></p>
             <p><a href="http://www.17000ft.org/" target="blank">17000 Ft </a></p>

                </div>
            </div>
        )
    }

    else if (props.stateName.includes("Jharkhand")) {
        return (
            <div className="flex" id="box">

                <div className="box color2" id="box">
                    <h2 className="mainstate">Jharkhand</h2>
                    <p><a href="https://ranchi.nic.in/covid/" target="blank">Jharkhand Sahayata </a></p>
                    <p><a href="http://janjagrankendra.org/donate.html" target="blank">Jan Jagran Kendra </a></p>

                </div>
            </div>
        )
    }

    else if (props.stateName.includes("Karnataka")) {
        return (
            <div className="flex" id="box">

                <div className="box color3" id="box">
                    <h2 className="mainstate">Karnataka</h2>
                    <p><a href="https://serviceonline.gov.in/karnataka/renderApplicationForm.do;jsessionid=79C6CA4D4C8797EBCE08224EB2EFE5E1?serviceId=10770003&UUID=53c90b12-83ce-4557-9a80-367b2bde5dcd&grievDefined=0&serviceLinkRequired=No&directService=true&userLoggedIn=N&tempId=4791&source=CTZN&OWASP_CSRFTOKEN=KBEV-3OBD-7JK7-L3K0-FDWE-6A58-ZI1Q-QLRR" target="blank">
                        Official Link to Donate for COVID-19</a></p>
                        <p><a href="https://www.riseagainsthungerindia.org/" target="blank">Rise Against Hunger</a></p>
             <p><a href="https://gubbachi.org.in/" target="blank">Gubacchi - Learning to Fly</a></p>
                </div>
            </div>
        )
    }

    else if (props.stateName.includes("Kerala")) {
        return (
            <div className="flex" id="box">

                <div className="box color4" id="box">
                    <h2 className="mainstate">Kerala</h2>
                    <p><a href="https://donation.cmdrf.kerala.gov.in/" target="blank">Chief Minister's Pandemic Relief Fund</a></p>
                </div>
            </div>
        )
    }

    else if (props.stateName.includes("Madhya Pradesh")) {
        return (
            <div className="flex" id="box">

                <div className="box color5" id="box">
                    <h2 className="mainstate">Madhya Pradesh</h2>
                    <p><a href="https://mapit.gov.in/cmrf/" target="blank">CM Relief Fund Government of Madhya Pradesh</a></p>
                </div>
            </div>
        )
    }

    else if (props.stateName.includes("Maharashtra")) {
        return (
            <div className="flex" id="box">

                <div className="box color6" id="box">
                    <h2 className="mainstate">Maharashtra</h2>
                    <p><a href="https://cmrf.maharashtra.gov.in/CMRFCitizen/DonationOnlineForm.action" target="blank">
                        Chief Minister Relief Fund</a></p>
                        
             <p><a href="http://www.khushiyaanfoundation.org/" target="blank">Khushiyaan Foundation</a></p>
             <p><a href="https://www.unitedwaymumbai.org/" target="blank">United Way</a></p>
             <p><a href="https://www.ketto.org/fundraiser/support-our-kachra-vechaks-in-the-covid-times?payment=form" target="blank">Ketto Fundraiser</a></p>
             <p><a href="https://www.unitedwaymumbai.org/" target="blank">United Way</a></p>
                </div>
            </div>
        )
    }

    else if (props.stateName.includes("Manipur")) {
        return (
            <div className="flex" id="box">

                <div className="box color7" id="box">
                    <h2 className="mainstate">Manipur</h2>
                    <p><a href="https://manipur.gov.in/wp-content/uploads/2020/03/manipur-cm-covid-19-fund.pdf" target="blank">
                        Chief Minister's COVID-19 Relief Fund </a></p>
                </div>
            </div>
        )
    }

    else if (props.stateName.includes("Meghalaya")) {
        return (
            <div className="flex" id="box">

                <div className="box color8" id="box">
                    <h2 className="mainstate">Meghalaya</h2>
                    <p><a href="-http://meghalaya.gov.in/megportal/" target="blank">Web Portal of Government of Meghalaya</a></p>
                    <p><a href="-http://meghalaya.gov.in/megcms/sites/default/files/announcement/Helpline_Numbers_Updated.pdf" target="blank">
                        COVID-19 HelpLine</a></p>
                </div>
            </div>
        )
    }


    else if (props.stateName.includes("Mizoram")) {
        return (
            <div className="flex" id="box">

                <div className="box color1" id="box">
                    <h2 className="mainstate">Mizoram</h2>
                    <p><a href="https://dipr.mizoram.gov.in/" target="blank">Directorate of Information & Public Relations Government of Mizoram</a></p>
                </div>
            </div>
        )
    }


    else if (props.stateName.includes("Tripura")) {
        return (
            <div className="flex" id="box">

                <div className="box color1" id="box">
                    <h2 className="mainstate">Tripura</h2>
                    <p><a href="https://cmrf.tripura.gov.in/" target="blank">Chief Minister's Relief Fund</a></p>
                </div>
            </div>
        )
    }

    else if (props.stateName.includes("Uttarakhand")) {
        return (
            <div className="flex" id="box">

                <div className="box color2" id="box">
                    <h2 className="mainstate">Uttarakhand</h2>
                    <p><a href="https://cmrf.uk.gov.in/" target="blank">UKCMRF</a></p>
                    <p><a href="https://indiafightscorona.giveindia.org/?utm_source=subs_homepage_desktop" target="blank">Give India</a></p>
              <p><a href="https://www.charitnation.org/corona-impact" target="blank">Charitnation</a></p>
                </div>
            </div>
        )
    }
    else if (props.stateName.includes("Uttar Pradesh")) {
        return (
            <div className="flex" id="box">

                <div className="box color3" id="box">
                    <h2 className="mainstate">Uttar Pradesh</h2>
                    <p><a href="https://rahat.up.nic.in/upcovidcarefund.aspx" target="blank">COVID CARE FUND</a></p>
                    <p><a href="https://www.saathire.com/PIG/uttishtha-foundation/" target="blank">Uttishtha Foundation </a></p>

                </div>
            </div>
        )
    }
    else if (props.stateName.includes("West Bengal")) {
        return (
            <div className="flex" id="box">

                <div className="box color4" id="box">
                    <h2 className="mainstate">West Bengal</h2>
                    <p><a href="https://www.wbhealth.gov.in/uploaded_files/corona/Serf.pdf" target="blank">West Bengal State Emergency Relief Fund </a></p>
                    <p><a href="http://bhavishyabharat.in/" target="blank">Bhavishya Bharat</a></p>
               <p><a href="https://www.desirovation.com/covid-help" target="blank">DesirOvation </a></p>
                </div>
            </div>
        )
    }
    else if (props.stateName.includes("Telagana")) {
        return (
            <div className="flex" id="box">

                <div className="box color8" id="box">
                    <h2 className="mainstate">Telagana</h2>
                    <p><a href="https://telangana.gov.in/cm-relief-fund" target="blank">Chief Minister Relief Fund</a></p>
                    <p><a href="http://bhavishyabharat.in/" target="blank">Bhavishya Bharat</a></p>
             <p><a href="https://pages.razorpay.com/Covid19Relief" target="blank">Safa Society</a></p>
                </div>
            </div>
        )
    }
    else if (props.stateName.includes("Tamil Nadu")) {
        return (
            <div className="flex" id="box">

                <div className="box color7" id="box">
                    <h2 className="mainstate">Tamil Nadu</h2>
                    <p><a href="https://ereceipt.tn.gov.in/cmprf/Cmprf" target="blank">CM's Public Relief Fund</a></p>
                    <p><a href="https://www.fueladream.com/home/campaign/21583" target="blank">Fuel a Dream</a></p>

                </div>
            </div>
        )
    }
    else if (props.stateName.includes("Sikkim")) {
        return (
            <div className="flex" id="box">

                <div className="box color6" id="box">
                    <h2 className="mainstate">Sikkim</h2>
                    <p><a href="https://www.covid19sikkim.org/" target="blank">Sikkim COVID-19 Centralized Information System</a></p>
                    <p><a href="http://bhavishyabharat.in/" target="blank">Bhavishya Bharat</a></p>

                </div>
            </div>
        )
    }
    else if (props.stateName.includes("Rajasthan")) {
        return (

            <div className="flex" id="box">

                <div className="box color5" id="box">
                    <h2 className="mainstate">Rajasthan</h2>
                    <p><a href="http://cmrelief.rajasthan.gov.in/Covid-19.aspx" target="blank">
                        Rajasthan CMRF Covid-19 Mitigation Fund</a></p>
                        <p><a href="https://www.feedingindia.org/" target="blank">Zomato Feeding India</a></p>
              <p><a href="https://www.barefootcollege.org/donate/?cc=inr&utm_campaign=dmCOVID19" target="blank">BareFoot College</a></p>
                </div>
            </div>
        )
    }
    else if (props.stateName.includes("Punjab")) {
        return (
            <div className="flex" id="box">

                <div className="box color4" id="box">
                    <h2 className="mainstate">Punjab</h2>
                    <p><a href="https://cmrf.punjab.gov.in/" target="blank">Punjab Chief Minister Relief Fund</a></p>
                </div>
            </div>
        )
    }
    else if (props.stateName.includes("Orissa")) {
        return (<div className="flex" id="box">

            <div className="box color3" id="box">
                <h2 className="mainstate">Orissa</h2>
                <p><a href="https://cmrfodisha.gov.in/" target="blank">Chief Minister Relief Fund</a></p>
                <p><a href="https://www.nydhee.org/donate_now.html#menu1" target="blank">NYDHEE</a></p>

            </div>
        </div>
        )
    }
    else if (props.stateName.includes("Nagaland")) {
        return (
            <div className="flex" id="box">
                <div className="box color2" id="box">
                    <h2 className="mainstate">Nagaland</h2>
                    <p><a href="https://chiefminister.nagaland.gov.in/chief-minister-relief-fund-list-of-donors-with-amount-update-till-december-2019/"
                        target="blank" >Chief Minister's Relief Fund</a></p>
                </div>
            </div>
        )
    }

    else {
        return (
            <div className="flex" id="box">

            </div>
        )
    }
}

export default CardsSearch

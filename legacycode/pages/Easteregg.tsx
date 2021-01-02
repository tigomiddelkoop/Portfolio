import React, {Fragment} from "react";
import hearts from "../img/hearts.png"
import Moment, {Duration} from "moment";
import {faChevronDown} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExclamationTriangle} from "@fortawesome/free-solid-svg-icons/faExclamationTriangle";


// The relation has ended so let me put the end date here, I do still love the girl into oblivion! And I genuinly hope I never lose these feelings!
// This page will not be available, but will remain in the sourcecode until I eventually switch from framework?

export default class Easteregg extends React.Component<{}, EastereggState> {

    interval: any;

    onfocus: Function = function (e: any) {
        console.log(`TAB ACTIVE ${new Date()}`)
    };

    onblur: Function = function (e: any) {
        console.log(`TAB INACTIVE ${new Date()}`)
    }

    dates = {
        dateOfRelation: Moment("2020-03-13"),
    }

    state = {
        milestonesOpen: false,
        easteregg: {disclaimerClosed: false, found: false, foundPreviously: false},
        counter: this.formatRelationLength(this.calculateRelationLength()),
        milestones: this.getMilestones(this.calculateRelationLength())
    };

    /**
     *
     * Toggles the easter egg when the button got pressed
     *
     * @return {void} returns nothing
     *
     */

    toggleEaster = () => {
        let {easteregg} = this.state
        easteregg.found = true

        window.localStorage.setItem("relationEasteregg", JSON.stringify(easteregg));
        this.setState({easteregg});
    }

    toggleMilestone = () => {
        this.setState({milestonesOpen: !this.state.milestonesOpen})
    }

    closeDisclaimer = () => {
        let {easteregg} = this.state
        easteregg.disclaimerClosed = true

        window.localStorage.setItem("relationEasteregg", JSON.stringify(easteregg));
        this.setState({easteregg});
    }

    /**
     *
     * Executes when the page gets mounted
     *
     * @return {void} Returns nothing
     *
     */

    componentDidMount(): void {

        let easteregg: any = window.localStorage.getItem("relationEasteregg");

        if (easteregg == null) {
            window.localStorage.setItem("relationEasteregg", JSON.stringify({disclaimerClosed: false, found: false, foundPreviously: false}));
            easteregg = {disclaimerClosed: false, found: false, foundPreviously: false};
        } else {
            easteregg = JSON.parse(easteregg);
        }

        this.setState({easteregg})

        // window.onblur = this.onblur();
        // window.onfocus = this.onfocus();

        this.interval = setInterval(() => {

            const relationLength = this.calculateRelationLength()
            const relationLengthFormatted = this.formatRelationLength(relationLength)

            const milestones = this.getMilestones(relationLength);
            this.setState({counter: relationLengthFormatted, milestones})

        }, 500) // It is not really necessary to do it every 500ms, but i felt like it needed to be accurate enough.


    }

    /**
     *
     * Executes when the component will unmount
     *
     * @return {void} The Element that needs to be rendered
     *
     */

    componentWillUnmount(): void {
        clearInterval(this.interval)
    }

    /**
     *
     * Renders the elements that are going to be displayed on the page
     *
     * @return {JSX.Element} The element that needs to be rendered
     *
     */

    render(): JSX.Element {

        const {counter, milestones, easteregg} = this.state;

        return (

            <div className={`min-h-screen flex-col flex`}>
                <div
                    className="h-full flex-1 flex  items-center text-center content-center justify-center transition duration-150 ease-in-out">
                    <div className="align-middle">
                        {!easteregg.found ?
                            <Fragment>
                                <div>
                                    <h1 className="text-5xl md:text-5xl font-light">EasterEgg!</h1>
                                    <h1 className="text-md md:text-md font-light">Click Reveal to see what it is!</h1>
                                    <button onClick={this.toggleEaster}
                                            className={"shadow bg-gray-900 hover:bg-gray-700 px-4 py-2 rounded-lg mt-2"}>
                                        <img alt={"hearts"} className={"inline w-6 mr-2"} src={hearts}/>
                                        <p className={"inline"}>Reveal</p>
                                    </button>
                                </div>
                            </Fragment>
                            :
                            <Fragment>
                                <div className={""}>
                                    <h1 className="text-6xl font-light">Demi</h1>
                                    <img alt={"hearts"} className={"w-32 inline"} src={hearts}/>

                                    <h1 className="text-4xl md:text-6xl font-light">{this.dates.dateOfRelation.format("MMMM DD[th] YYYY")}</h1>
                                    <h1 className="text-xs md:text-lg text-gray-500 font-light">{counter}</h1>
                                </div>

                                <div className={`bg-gray-900 m-2 rounded-lg shadow`}>

                                    <div
                                        onClick={this.toggleMilestone.bind(this)}
                                        className={`cursor-pointer flex ${this.state.milestonesOpen ? `border-b-2` : ``} border-gray-700`}>
                                        {/*

                                        I absolutely hate doing it this way... But it won't center otherwise.
                                        If someone could tell me how to do it better please tell me!

                                        */}
                                        <div className={`m-6`}></div>
                                        <h1
                                            className={`text-2xl flex-1 p-2 `}>"Milestones"</h1>
                                        <FontAwesomeIcon

                                            className={`transform transition duration-500 ${this.state.milestonesOpen ? `rotate-180` : ``} m-4 self-center`}
                                            icon={faChevronDown}/>

                                    </div>
                                    <div
                                        className={`${this.state.milestonesOpen ? `block` : `hidden`} transition duration-500 p-2`}>
                                        <p className={milestones.oneweek ? `text-white` : `text-gray-700`}>{milestones.oneweek ?
                                            <img alt={"hearts"} className={"inline w-6"} src={hearts}/> : ``} One
                                            week</p>
                                        <p className={milestones.onemonth ? `text-white` : `text-gray-700`}>{milestones.onemonth ?
                                            <img alt={"hearts"} className={"inline w-6"} src={hearts}/> : ``} One
                                            Month</p>
                                        <p className={milestones.sixmonths ? `text-white` : `text-gray-700`}>{milestones.sixmonths ?
                                            <img alt={"hearts"} className={"inline w-6"} src={hearts}/> : ``} Six
                                            months</p>
                                        <p className={milestones.oneyear ? `text-white` : `text-gray-700`}>{milestones.oneyear ?
                                            <img alt={"hearts"} className={"inline w-6"} src={hearts}/> : ``} One
                                            year</p>
                                    </div>
                                </div>


                            </Fragment>
                        }
                    </div>

                </div>
                {easteregg.found ?
                    <div
                         className={"flex text-center bg-gray-900 p-2 shadow"}>

                        <div className={"flex-1"}>
                            <p className={"text-xs font-light"}>Congratulations! You found this eastegg!</p>
                        </div>

                    </div> : ``}
                {easteregg.found && !easteregg.disclaimerClosed ?
                    <div onClick={this.closeDisclaimer.bind(this)}
                         className={"flex text-center bg-gray-900 p-2 shadow"}>
                        <FontAwesomeIcon className={"text-2xl self-center ml-2"} icon={faExclamationTriangle}/>
                        <div className={"flex-1"}>
                            <p className={"text-xl font-bold"}>DISCLAIMER</p>
                            <p className={"text-md font-light"}>Yes, This is something that is highly
                                personal</p>
                            <p className={"text-xs font-light"}>This is one of my ways of showing eternal
                                love to the girl I love.</p>
                            <p className={"text-xs font-light"}>(Click to close)</p>
                        </div>
                        <FontAwesomeIcon className={"text-2xl self-center mr-2"} icon={faExclamationTriangle}/>
                    </div> : ``}
            </div>
        )
    }

    /**
     *
     * Calculates the length of the relationship between Demi and me
     *
     * @return {Duration} - A object containing the time of our relationship in computerreadable form
     *
     */

    calculateRelationLength(): Duration {

        const length = Moment("2020-09-04");
        let duration = Moment.duration(length.diff(this.dates.dateOfRelation));

        return duration;
    }


    /**
     *
     * Calculates the length of the relationship between Demi and me
     *
     * @return {string} - A string containing the time of our relationship in humanreadable form
     *
     */

    formatRelationLength(duration: Duration): string {
        let string = ""
        const years = duration.years()
        const months = duration.months()
        const days = duration.days()
        const hours = duration.hours()
        const minutes = duration.minutes()
        const seconds = duration.seconds()


        string += ` ${years} Year${years !== 1 ? 's' : ''},`
        string += ` ${months} Month${months !== 1 ? 's' : ''},`
        string += ` ${days} Day${days !== 1 ? 's' : ''},`
        string += ` ${hours} Hour${hours !== 1 ? 's' : ''},`
        string += ` ${minutes} Minute${minutes !== 1 ? 's' : ''}`
        string += ` and`
        string += ` ${seconds} Second${seconds !== 1 ? 's' : ''}`

        return string;
    }

    /**
     *
     * Calculates the "milestones" reached by using the duration of the relation
     * it will return a object with true or false objects
     *
     * @param duration
     *
     * @return {Milestones} - A JSON object containing the milestones
     */

    getMilestones(duration: Duration): Milestones {

        /**
         *
         * I am going to call them milestones for now but that needs to be rephrased really quick!
         *
         */
        let dates = {
            years: duration.years(),
            months: duration.months(),
            weeks: duration.weeks(),
        }

        let milestones = {
            oneweek: false,
            onemonth: false,
            sixmonths: false,
            oneyear: false,
            twoyears: false,
            threeyears: false
        }


        if (dates.weeks >= 1 || dates.months >= 1) milestones.oneweek = true;
        if (dates.months >= 1 || dates.years >= 1) milestones.onemonth = true;
        if (dates.months >= 6 || dates.years >= 1) milestones.sixmonths = true;
        if (dates.years >= 1) milestones.oneyear = true;
        if (dates.years >= 2) milestones.oneyear = true;
        if (dates.years >= 3) milestones.oneyear = true;

        return milestones;

    }

}
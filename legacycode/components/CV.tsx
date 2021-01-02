import React, {Fragment} from 'react';

export default class CV extends React.Component<any, { bannerHidden: any }> {

    /**
     *
     * Function that gets executed when the component mounted
     *
     * @return {void} Returns nothing
     *
     */

    componentDidMount(): void {
    }



    /**
     *
     * Renders the elements that are going to be displayed on the page
     *
     * @return {JSX.Element} The element that needs to be rendered
     *
     */

    render(): JSX.Element {

        return (
            <Fragment>
                <div className="flex py-2 bg-gray-900 ">
                    <div className={"flex-1 text-center flex justify-center"}>
                        <div className="flex flex-col lg:flex-row font-light text-md md:text-base">
                            <p className={"px-2 py-1"}>Use the print command (CTRL + P) to save my CV or</p>
                            <a href="/data/CV.pdf" className={"shadow cursor-pointer bg-gray-800 font-semibold hover:bg-gray-600 px-2 py-1 rounded-lg"}>Click Here</a>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }

};

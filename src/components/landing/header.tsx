import React from 'react';

interface Props {}
interface State {
    searchQuery: string;
}


export default class Header extends React.Component<Props, State> {
    state = { searchQuery: '' };

    constructor(props: Props) {
        super(props);
        // bind event handlers
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    /*
     * Set state of searchQuery to value of "s" in query params.
     */
    componentDidMount(): void {
        const queryParams = new URLSearchParams(window.location.search);
        const searchQuery = queryParams.get('s') || '';
        this.setState({ searchQuery });
    }

    /*
     * Update state when form input changes.
     */
    onChange(event: React.ChangeEvent<HTMLInputElement>): void {
        this.setState({ searchQuery: event.target.value });
    }

    /*
     * Update query string when form is submitted.
     */
    onSubmit(event: React.FormEvent<HTMLFormElement>): void {
        event.preventDefault();
        window.location.search = `s=${this.state.searchQuery}`;
    }

    render(): React.ReactElement<HTMLDivElement> {
        return (
            <header className="masthead text-white text-center">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-9 mx-auto">
                            <h1 className="mb-5">
                                RIOT
                            </h1>
                        </div>
                        <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
                            <form onSubmit={ this.onSubmit }>
                                <div className="form-row">
                                    <div className="col-12 col-md-9 mb-2 mb-md-0">
                                        <input
                                            type="text"
                                            className="form-control form-control-lg"
                                            placeholder="Enter your email..."
                                            defaultValue={ this.state.searchQuery }
                                            onChange={ this.onChange }
                                        />
                                    </div>
                                    <div className="col-12 col-md-3">
                                        <button type="submit" className="btn btn-block btn-lg btn-primary">
                                            Sign up
                                        </button>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="col-12 mt-3">
                                        <p className="text-body text-left font-weight-bold">
                                            { this.state.searchQuery ? 'Welcome,' : '' }
                                            <span
                                                className="font-weight-normal"
                                                dangerouslySetInnerHTML={{ __html: this.state.searchQuery }}>
                                            </span>
                                            { this.state.searchQuery ? '!' : '' }
                                        </p>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </header>
        );
    }

}

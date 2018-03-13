// Route handler
class YourRoute extends React.Component {
  constructor(props) {
    super(props)
    // Load user from wherever into state.
  }
  render() {
    return <Authorization allowed={this.props.allowed} user={this.state.user}>
      {() =>
        /* the rest of your page */
      }
    <Authorization>
  }
}

export default YourRoute

// Router configuration
<Router history={BrowserHistory}>
  <Route path="/" component={App}>
    <Route
      allowed={['manager', 'admin']}
      path="feature"
      component={YourRoute}
    />
  </Route>
</Router>

// Authorization HOC
const Authorization = (WrappedComponent, allowedRoles) =>
  return class WithAuthorization extends React.Component {
    constructor(props) {
      super(props)

      // In this case the user is hardcoded, but it could be loaded from anywhere.
      // Redux, MobX, RxJS, Backbone...
      this.state = {
        user: {
          name: 'vcarl',
          role: 'admin'
        }
      }
    }
    render() {
      const { role } = this.state.user
      if (allowedRoles.includes(role)) {
        return <WrappedComponent {...this.props} />
      } else {
        return <h1>No page for you!</h1>
      }
    }
  }

// Route handler
class YourRoute extends React.Component {
  render() {
    return <div>
      /* the rest of your page */
    </div>
  }
}

export default Authorization(YourRoute, ['manager', 'admin'])

// Router configuration
<Router history={BrowserHistory}>
  <Route path="/" component={App}>
    <Route
      path="feature"
      component={YourRoute}
    />
  </Route>
</Router>

import React, { Component } from 'react';

<script type="application/javascript">
  function getIP(json) {
    document.write("My public IP address is: ", json.ip);
  }
</script>

<script type="application/javascript" src="https://api.ipify.org?format=jsonp&callback=getIP"></script>

class Address extends Component {
    render () {
        return {
            
        }
    }
}

export default Address;

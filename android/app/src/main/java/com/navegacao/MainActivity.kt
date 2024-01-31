package com.navegacao

import android.os.Bundle
import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.ReactRootView

class MainActivity : ReactActivity() {

    /*
     * Here was added following the react navigation getting starter guide by folowing this link: https://reactnavigation.org/docs/getting-started 
     */
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState) // Use savedInstanceState
    }

    override fun getMainComponentName(): String = "navegacao"

    override fun createReactActivityDelegate(): ReactActivityDelegate {
        // Implementation may vary based on React Native version and Fabric integration
        return ReactActivityDelegate(this, mainComponentName)
    }
}

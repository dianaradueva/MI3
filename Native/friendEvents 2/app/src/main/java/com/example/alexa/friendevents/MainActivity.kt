package com.example.alexa.friendevents

import android.content.Intent
import android.support.v7.app.AppCompatActivity
import android.os.Bundle
import android.support.v4.widget.DrawerLayout
import android.util.Log
import android.widget.Button
import android.widget.EditText
import android.widget.TextView
import android.widget.Toast
import androidx.navigation.Navigation
import androidx.navigation.fragment.NavHostFragment
import androidx.navigation.ui.NavigationUI
import com.example.alexa.friendevents.ui.main.MainFragment
import kotlinx.android.synthetic.main.fragment_login.*

class MainActivity : AppCompatActivity(){

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.main_activity)


        val host = supportFragmentManager.findFragmentById(R.id.index) as NavHostFragment? ?: return
        val navController = host.navController

        }

    }




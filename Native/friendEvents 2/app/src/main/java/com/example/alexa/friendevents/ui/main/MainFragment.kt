package com.example.alexa.friendevents.ui.main

import android.arch.lifecycle.ViewModelProviders
import android.os.Bundle
import android.support.v4.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Button
import androidx.navigation.Navigation
import com.example.alexa.friendevents.R

class MainFragment : Fragment() {

    companion object {
        fun newInstance() = MainFragment()
    }

    private lateinit var viewModel: MainViewModel

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View {
        return inflater.inflate(R.layout.main_fragment, container, false)
    }

    override fun onActivityCreated(savedInstanceState: Bundle?) {
        super.onActivityCreated(savedInstanceState)
        viewModel = ViewModelProviders.of(this).get(MainViewModel::class.java)
        // TODO: Use the ViewModel
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        /**hier gebruikern we clickListener voor knoppen**/
        view.findViewById<Button>(R.id.btnLogin)?.setOnClickListener {
            Navigation.findNavController(it).navigate(R.id.action_mainFragment_to_login)
        }

        view.findViewById<Button>(R.id.btnSignUp)?.setOnClickListener {
            Navigation.findNavController(it).navigate(R.id.action_mainFragment_to_signUp)
        }

    }

}

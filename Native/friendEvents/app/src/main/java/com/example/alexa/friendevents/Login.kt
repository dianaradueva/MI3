package com.example.alexa.friendevents


import android.os.Bundle
import android.support.v4.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Button
import android.widget.Toast
import androidx.navigation.Navigation
import kotlinx.android.synthetic.main.fragment_login.*


// TODO: Rename parameter arguments, choose names that match
// the fragment initialization parameters, e.g. ARG_ITEM_NUMBER
private const val ARG_PARAM1 = "param1"
private const val ARG_PARAM2 = "param2"

/**
 * A simple [Fragment] subclass.
 *
 */
class Login : Fragment() {

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        // Inflate the layout for this fragment
        return inflater.inflate(R.layout.fragment_login, container, false)
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        login_button.setOnClickListener {

        /**hier gebruikern we clickListener voor knoppen**/



        view.findViewById<Button>(R.id.login_button)?.setOnClickListener {
            if(user.text.toString().equals("Alex")
                &&password.text.toString().equals("alexMI3"))
                Navigation.findNavController(it).navigate(R.id.action_login_to_profile)
            else "Verkeerde input"
        }

        view.findViewById<Button>(R.id.btnSignUp)?.setOnClickListener {
            Navigation.findNavController(it).navigate(R.id.action_login_to_signUp)
        }

        }
    }
}

package com.example.alexa.friendevents


import android.os.Bundle
import android.support.v4.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Button
import androidx.navigation.Navigation


// TODO: Rename parameter arguments, choose names that match
// the fragment initialization parameters, e.g. ARG_ITEM_NUMBER
private const val ARG_PARAM1 = "param1"
private const val ARG_PARAM2 = "param2"

/**
 * A simple [Fragment] subclass.
 *
 */
class SignUp : Fragment() {

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        // Inflate the layout for this fragment
        return inflater.inflate(R.layout.fragment_sign_up, container, false)
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        /**hier gebruikern we clickListener voor knoppen**/

        view.findViewById<Button>(R.id.signUp_button)?.setOnClickListener {
            Navigation.findNavController(it).navigate(R.id.action_signUp_to_profile)
        }

        view.findViewById<Button>(R.id.btnLogin)?.setOnClickListener {
            Navigation.findNavController(it).navigate(R.id.action_signUp_to_login)
        }
    }

    }

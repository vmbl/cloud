<?php if(!defined('BASEPATH')) exit('No direct script access allowed');

class Ajax extends CI_Controller
{
    /**
     * This is default constructor of the class
     */
    public function __construct()
    {
        parent::__construct();
        $this->load->model('user_model');
      
    }
    

    public function getCities() {
        $selectedStates = explode(",", $this->input->post('states'));

        if(count($selectedStates) > 0) {
            $response['data'] = $selectedStates;
            $this->load->view("cities", $response);
        } else {

        }
        
       
    }
}

?>
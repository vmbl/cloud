
<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
        <i class="fa fa-tachometer" aria-hidden="true"></i> Upload
        <small>Document / Files</small>
      </h1>
    </section>
    
    <section class="content">
         <?php
            $this->load->helper('form');
            $error = $this->session->flashdata('error');
            if($error)
            {
        ?>
              <div class="alert alert-danger alert-dismissable">
                  <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
                  <?php echo $this->session->flashdata('error'); ?>                    
              </div>
        <?php } ?>
        <?php  
            $success = $this->session->flashdata('success');
            if($success)
            {
        ?>
              <div class="alert alert-success alert-dismissable">
                  <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
                  <?php echo $this->session->flashdata('success'); ?>
              </div>
         <?php } ?>
        <div class="row">
              <div class="col-sm-6">
                <form action="<?php echo base_url().'user/uploadfile' ?>" method="post" enctype="multipart/form-data">
                    <div class="form-group">
                      <label for="brand">Brand :</label>
                      <select name="brand" class="form-control" id="brand" required>
                        <option value="livguard">Livguard Solar</option>
                        <option value="Livfast">LivFast Solar</option>
                        <option value="both">Both</option>
                      </select>
                    </div>
                    <div class="form-group">
                       <label for="type">Type :</label>
                       <select class="form-control" name="type"  required>
                          <option value="">--Choose Type Here</option>
                          <option value="product">Product Catalogue</option>
                          <option value="solution">Solution Catalogue</option>
                          <option value="datasheets">Datasheets</option>
                          <option value="price">Price Details</option>
                          <option value="license">License & Other Documents</option>
                          <option value="whitepaper">White Paper Documents</option>
                          <option value="videos">Videos & Training Docs</option>
                      </select>
                    </div>
                    <div class="form-group">
                       <label for="type">Datasheets Type:</label>
                       <select class="form-control" name="type">
                          <option value="">--Choose Type Here</option>
                          <option value="off_grid_inverter_mppt">Off-grid inverter MPPT</option>
                          <option value="off_grid_inverter_pwm">Off-grid inverter PWM</option>
                          <option value="gi_inverter">GI inverter</option>
                          <option value="gih">GIH inverter</option>
                          <option value="solar_panel_mono">Solar Panel Mono</option>
                          <option value="solar_panel_poly">Solar Panel Poly</option>
                          <option value="solar_panel_dcr">Solar Panel DCR</option>
                          <option value="lead_acid_solar_battery">Lead Acid Solar Battery</option>
                      </select>
                    </div>
                    <div class="form-group">
                       <label for="filename">File Display Name :</label>
                       <input type="text" name="filename" class="form-control" id="filename" required>
                    </div>
                    <div class="checkbox">
                      <label><input type="checkbox" name="latest">Latest Version</label>
                    </div>
                    <div class="form-group">
                      <label>Select File:</label>
                      <input type="file" name="uploadfile" class="form-control" required/>
                    </div>
                    <button type="submit" class="btn btn-default">Submit</button>
                </form> 
              </div>
          </div>
    </section>
</div>

<script type="text/javascript">
  
  jQuery(document).ready(function(){

      $(".allst").click(function(){
          var selected = [];
          $("input:checkbox[class=allst]:checked").each(function(){
              selected.push($(this).val());
          });
          var dataString = "states="+selected
          $.ajax({
            url : "<?=base_url().'ajax/getCities'?>",
            data: dataString,
            type : "POST",
            success : function(response) {
              $("ul#cities").html(response)
            }

          })
          console.log(selected);
      })

  })
</script>
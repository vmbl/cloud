
<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
        <i class="fa fa-tachometer" aria-hidden="true"></i> Product Catalogue
        <small>Latest Files</small>
      </h1>
    </section>
      <?php //print_r($files) ?>
    <section class="content" style="background: white;">

        <div class="row">
              <form action="<?php echo base_url().'user/uploadfile' ?>" method="get" >
                    <div class="form-group" style="width: 50%;margin: 0 auto;text-align: center;">
                      <label for="brand">Brand :</label>
                      <select name="brand" class="form-control" id="brand" required>
                        <option value="livguard">Livguard Solar</option>
                        <option value="Livfast">LivFast Solar</option>
                      </select>
                      <button style="margin-top: 10px;margin-bottom: 10px;" type="submit" class="btn btn-default">Submit</button>
                    </div>
                    
              </form>
              <div class="col-sm-12">
               <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th colspan="3">Track Versions</th>
                    </tr>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Filename</th>
                      <th scope="col">Last Modified</th>
                    </tr>
                    <?php foreach ($files as $key => $value) { ?>
                      <tr>
                        <td><?=$key+1?></td>
                        <td><a target="_blank" href="<?php echo base_url().$value->path ?>"><?=$value->filename?></a></td>
                        <td><?=$value->created?></td>
                      </tr>
                    <?php } ?>
                  </thead>
                </table>
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
  require 'json'
  # def compress_properties obs, props 
  #   cleansed_obs = []
  #   obs.each do |ob|
  #     new_ob = {}
  #     props.each do |prop|
  #       new_ob[prop] = ob[prop]
  #     end
  #     cleansed_obs << new_ob
  #   end
  #   cleansed_obs
  # end


# generate turns an obj into a string
# parse turns a string into obj 


   # obs = [{a: '1',b: '2', c: '3'},{a: '1',b: '2', c: '3'},{a: '1',b: '2', c: '3'}]
   # x =  JSON.generate(obs) 
   # y = JSON.parse(x)
   # p y[0]
  # props = [:a,:b]

  # x = compress_properties obs, props

  # p x

  # x = "{'name': 'name', 'id': '0', 'price': '0.0', 'quantity': '0', 'image_url': 'http://i47.tinypic.com/dx0g11.jpg'}"


# my_hash = {hello: "goodbye"}
# p JSON.generate(my_hash) 
# my_hash = JSON.parse('{"hello": "goodbye"}')
# p my_hash["hello"]


  # def compress_props properties, o 
  #   new_o = {}
  #   properties.each do |property|
  #     new_o[property] = o[property.to_sym]
  #   end
  #   new_o
  # end
# x = {'c':'c', 'a':'a', 'b':'b'}
#   p compress_props(['a','b'], x)
# p x[:a]


<!-- Modal -->
<div aria-labelledby='myModalLabel' class='modal fade' id='myModal' role='dialog' tabindex='-1'>
  <div class='modal-dialog' role='document'>
    <div class='modal-content'>
      <div class='modal-header'>
        <button aria-label='Close' class='close' data-dismiss='modal' type='button'>
          <span aria-hidden='true'>&times;</span>
        </button>
        <h4 class='modal-title' id='myModalLabel'>Shopping Cart</h4>
      </div>
      <div class='modal-body'>
        <table style='width:100%;color:#757575'>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
            <th></th>
          </tr>
        </table>
        <tr>
          <td>
            Incredible Bronze Shirt
          </td>
          <td>
            <input increment='1' min='1' style='width:40px' type='number' value='2'>
          </td>
          <td>
            14.0
          </td>
          <td>
            
          </td>
          <td>
            <a class="btn btn-danger btn-xs" href="#">remove</a>
          </td>
        </tr>
        <tr>
          <td>
            Intelligent Plastic Keyboard
          </td>
          <td>
            <input increment='1' min='1' style='width:40px' type='number' value='2'>
          </td>
          <td>
            13.0
          </td>
          <td>
            
          </td>
          <td>
            <a class="btn btn-danger btn-xs" href="#">remove</a>
          </td>
        </tr>
        <tr>
          <td>
            Practical Marble Hat
          </td>
          <td>
            <input increment='1' min='1' style='width:40px' type='number' value='2'>
          </td>
          <td>
            19.0
          </td>
          <td>
            
          </td>
          <td>
            <a class="btn btn-danger btn-xs" href="#">remove</a>
          </td>
        </tr>
        <tr>
          <td>
            Mediocre Wool Pants
          </td>
          <td>
            <input increment='1' min='1' style='width:40px' type='number' value='2'>
          </td>
          <td>
            10.0
          </td>
          <td>
            
          </td>
          <td>
            <a class="btn btn-danger btn-xs" href="#">remove</a>
          </td>
        </tr>
        <tr>
          <td>
            Gorgeous Wool Keyboard
          </td>
          <td>
            <input increment='1' min='1' style='width:40px' type='number' value='2'>
          </td>
          <td>
            17.0
          </td>
          <td>
            
          </td>
          <td>
            <a class="btn btn-danger btn-xs" href="#">remove</a>
          </td>
        </tr>
        <tr>
          <td>
            Mediocre Concrete Hat
          </td>
          <td>
            <input increment='1' min='1' style='width:40px' type='number' value='2'>
          </td>
          <td>
            10.0
          </td>
          <td>
            
          </td>
          <td>
            <a class="btn btn-danger btn-xs" href="#">remove</a>
          </td>
        </tr>
        <tr>
          <td>
            zz
          </td>
          <td>
            <input increment='1' min='1' style='width:40px' type='number' value='2'>
          </td>
          <td>
            0.0
          </td>
          <td>
            
          </td>
          <td>
            <a class="btn btn-danger btn-xs" href="#">remove</a>
          </td>
        </tr>
      </div>
      <div class='modal-footer'>
        <div class='col-xs-4 col-xs-offset-8'>
          <span class='pull-right'>22.34</span>
        </div>
        <div class='col-xs-4 col-xs-offset-8'>
          <span class='pull-right big-bold'>
            
          </span>
        </div>
        <hr>
        <button class='btn btn-default' data-dismiss='modal' type='button'>Keep Shopping</button>
        <button class='btn btn-primary' type='button'>Purchase</button>
      </div>
    </div>
  </div>
</div>

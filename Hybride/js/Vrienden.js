$(function(){
    $(document).on('click','.vriendBtn',function(){
        var $this = $(this);
        var type = $this.data('type');
        
        switch(type)
            {
                case 'addFriend':
                    var id = $this.data('uid');
                    
                    if(id != "")
                        {
                            $.post('http://www.gheraille.be/events/Parse.php', {tags: 'addFriend', uid: id}, function(data){
                                var obj = jQuery.parseJSON(data);
                                
                                if(obj.code == 1)
                                    {
                                        $this.text(obj.msg);
                                        this.attr('disabled', 'disabled');
                                    }
                                else{
                                    alert('Probleem: ' + obj.msg)
                                }
                                
                            });
                        }
                    
                    break;
            }
    });
});
import React from 'react'

const Login = () => {
  return (
    <div>
        <Form onSubmit={handleSubmit}>
            <div className="d-flex justify-content-end my-3">
                <GrClose onClick={handleClose2} className="text-orange close-icon" />
            </div>
            <div className="text-center mt-5">
                <h4 className="font-700 font-28 text-dark">Share your amazing story!</h4>
            </div>
            <Row>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label><p className="font-14 text-ashhhh pt-1 font-400 roboto">Upload your picture</p></Form.Label>
                    <Form.Control value={image} onChange={e => setImage(e.target.value)} className="story-input p-3" type="file" placeholder="Choose image" />
                </Form.Group>
            </Row>
            <Row>
                <div className="col-12 col-md-6">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label><p className="font-14 text-ashhhh pt-1 font-400 roboto">First Name</p></Form.Label>
                        <Form.Control required value={firstName} onChange={e => setFirstName(e.target.value)} className="story-input p-3" type="text" placeholder="" />
                    </Form.Group>
                </div>
                <div className="col-12 col-md-6">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label><p className="font-14 text-ashhhh pt-1 font-400 roboto">Last Name</p></Form.Label>
                        <Form.Control required value={lastName} onChange={e => setLastName(e.target.value)} className="story-input p-3" type="text" placeholder="" />
                    </Form.Group>
                </div>
            </Row>
            <Row>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label><p className="font-14 text-ashhhh pt-1 font-400 roboto">Share your story</p></Form.Label>
                    <Form.Control required value={story} onChange={e => setStory(e.target.value)} className="story-input" as="textarea" rows={3} />
                </Form.Group>
            </Row>
            <Row>
                <div className="col-12 col-md-4">
                    <p className="font-14 text-ashhhh pt-1 font-400 roboto">What did you interact with Vasiti as?</p>
                </div>
                <div className="col-6 col-md-4">
                    <input type="radio" id="customer" checked name="category" value="customer" onChange={e => setCategory(e.target.value)} />
                    <label for="customer"><p className="font-14 text-ashhhh pt-1 ps-1 font-400 roboto">Customer</p></label>
                </div>
                <div className="col-6 col-md-4">
                    <input type="radio" id="vendor" name="category" value="vendor" onChange={e => setCategory(e.target.value)} />
                    <label for="vendor"><p className="font-14 text-ashhhh pt-1 ps-1 font-400 roboto">Vendor</p></label>
                </div>
                
            </Row>
        </Form>
    </div>
  )
}

export default Login
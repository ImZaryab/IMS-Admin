import React, { useState, useRef } from 'react'
import { useHistory, Link } from 'react-router-dom'
import { Form, Button, Card, Alert, Container } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";

const Settings = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { currentUser, updateEmail, updatePassword } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    function handleSubmit(e) {
    e.preventDefault()
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
        return setError("Password Fields Do Not Match");
      }

      const promises = []
      setLoading(true)
      setError('')
      if (emailRef.current.value !== currentUser.email) {
          promises.push(updateEmail(emailRef.current.value))
      }
      if (passwordRef.current.value) {
        promises.push(updatePassword(passwordRef.current.value))
      }

      Promise.all(promises).then(() => {
          history.push('/')
      }).catch(() => {
          setError('Failed To Update Profile Settings')
      }).finally(() => {
          setLoading(false)
      })


  }

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "600px" }}>
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">Change Profile Settings</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" ref={emailRef} defaultValue={currentUser.email} />
                </Form.Group>
                <Form.Group id="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" ref={passwordRef} placeholder="Leave Blank To Keep Current Password"/>
                </Form.Group>
                <Form.Group id="password-confirm">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    ref={passwordConfirmRef}
                    placeholder="Leave Blank To Keep Current Password"
                  />
                </Form.Group>
                <Button disabled={loading} className="w-100" type="submit">
                  Save Changes
                </Button>
              </Form>
            </Card.Body>
          </Card>
      </div>
    </Container>
  );
}

export default Settings